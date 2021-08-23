import { toast } from 'react-toastify';



const showToast = (type, text) => {
    toast[type](<span>{text}</span>);
};

export const showSuccessToast = (text) => {
    showToast('success', text);
};

export const showErrorToast = (text) => {
    showToast('error', text);
};

export const showWarningToast = (text) => {
    showToast('warning', text);
};
