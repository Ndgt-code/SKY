import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function ExpensePanel() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const expenses = [
    { id: 1, name: "Mua sắm", amount: 500000 },
    { id: 2, name: "Ăn uống", amount: 200000 },
    { id: 3, name: "Xăng xe", amount: 100000 },
  ];

  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Đóng" : "Mở"} panel
      </button>
      {isOpen && user && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-semibold">Thông tin chi tiêu </h3>
          <ul className="mt-2">
            {expenses.map((expense) => (
              <li key={expense.id} className="text-gray-700">
                {expense.name}: {expense.amount.toLocaleString()} VND
              </li>
            ))}
          </ul>
          <div className="mt-4 text-gray-800 font-bold">
            Tổng chi tiêu: {totalAmount.toLocaleString()} VND
          </div>
        </div>
      )}
    </div>
  );
}