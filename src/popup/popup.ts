import "./styles/main.scss";
import "./styles/popup.scss";
import validateKey from "./validateKey";

const loadingSpinner = document.getElementById("spinner");
const licenseForm = document.getElementById("licenseForm");
const licensed = document.getElementById("licensed");

// chrome.storage.sync.set({ key: "6ae63270" });

const logout = () => {
  chrome.storage.sync.remove("key");
  initPopup();
};

const login = async (e: SubmitEvent) => {
  console.log("submitted");
  e.preventDefault();
  const inputField = document.getElementById("licenseKey") as HTMLInputElement;
  const licenseKey = inputField.value;
  if (licenseKey.replace(/ /g, "")) {
    const user = await validateKey(licenseKey);
    if (user) {
      chrome.storage.sync.set({ key: licenseKey });
      initPopup();
    } else {
      console.log("Invalid or expired license key");
      alert("Invalid or expired license key");
    }
  } else {
    alert("Enter a valid value");
    console.log("Enter a valid value");
  }
};

const controlLoadingSpinner = (value: string) =>
  (loadingSpinner!.style.display = value);

const initPopup = async () => {
  chrome.storage.sync.get("key", async (value: { key?: string }) => {
    licenseForm!.style.display = "none";
    licensed!.style.display = "none";
    controlLoadingSpinner("block");
    if (!value.key) {
      licenseForm!.style.display = "flex";
      licensed!.style.display = "none";
      controlLoadingSpinner("none");
      licenseForm?.addEventListener("submit", login);
    } else {
      const user = await validateKey(value.key);
      console.log("user", user);
      if (user) {
        controlLoadingSpinner("none");
        licenseForm!.style.display = "none";
        licensed!.style.display = "block";
        var s = new Date(user.expiresAt).toLocaleDateString("en-US");
        document.getElementById(
          "content"
        )!.innerHTML = `License key: ${user.licenseKey} - valid till: ${s}`;
        document.getElementById("logout")?.addEventListener("click", logout);
      } else {
        chrome.storage.sync.remove("key");
        licenseForm!.style.display = "flex";
        licensed!.style.display = "none";
        controlLoadingSpinner("none");
        licenseForm?.addEventListener("submit", login);
      }
    }
  });
};

initPopup();
