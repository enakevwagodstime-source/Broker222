function login() {
  document.getElementById("loginModal").classList.add("hidden");
  document.getElementById("userCard").classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

function showDeposit() {
  document.getElementById("depositSection").classList.remove("hidden");
  document.getElementById("withdrawSection").classList.add("hidden");
}

function showWithdraw() {
  document.getElementById("withdrawSection").classList.remove("hidden");
  document.getElementById("depositSection").classList.add("hidden");
}

// Withdraw options
document.querySelectorAll(".withdraw-option").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.method === "bank") {
      document.getElementById("bankTransferPage").classList.remove("hidden");
      document.getElementById("withdrawSection").classList.add("hidden");
    } else {
      alert(`Selected withdrawal method: ${btn.innerText}`);
    }
  });
});

// Chat toggle
const chatIcon = document.getElementById("chatIcon");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatIcon.onclick = () => chatBox.classList.remove("hidden");
closeChat.onclick = () => chatBox.classList.add("hidden");
