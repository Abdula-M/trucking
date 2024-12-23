import React, { FC, useState } from "react";
import { useTranslations } from "next-intl";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("Messages");
  const f = useTranslations("Form");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Обновление полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Обработка отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/4s9d36oyut6s1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(t('success'));
        setTimeout(() => {
          setSuccessMessage("");
          onClose();
        }, 3000);
      } else {
        throw new Error(t('error'));
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800/50 z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">{f('title')}</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {f('name')}
            </label>
            <input
              type="text"
              id="name"
              name="data[name]"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder={f('placeholders.name')}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {f('email')}
            </label>
            <input
              type="email"
              id="email"
              name="data[email]"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder={f('placeholders.email')}
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {f('phone')}
            </label>
            <input
              type="number"
              id="phone"
              name="data[phone]"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder={f('placeholders.phone')}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 text-white rounded ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#05caa5] hover:bg-[#05caa5]/80 active:transform active:scale-95"
            }`}
          >
            {isSubmitting ? f('sending') : f('submit')}
          </button>
        </form>

        {successMessage && (
          <p className="mt-4 text-center text-green-600">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
