import type { ExpenseCategory } from "./ExpenseTracker";
import type { Dispatch, SetStateAction, FormEvent } from "react";

type ExpenseFormProps = {
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;

  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;

  category: ExpenseCategory;
  setCategory: Dispatch<SetStateAction<ExpenseCategory>>;
};

function ExpenseForm({
  onSubmitHandler,
  title,
  setTitle,
  amount,
  setAmount,
  category,
  setCategory
}: ExpenseFormProps) {
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Expense title"
      />

      <input
        type="text"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <select
        value={category}
        onChange={e =>
          setCategory(e.target.value as ExpenseCategory)
        }
      >
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="bills">Bills</option>
      </select>

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;