export default function copy(copyText: string, showToast: () => void) {
  navigator.clipboard.writeText(copyText).then(() => {
    showToast();
    setTimeout(() => showToast(), 2000);
  });
}
