import { useCallback, useMemo, useState, type FormEvent } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export type ExpenseCategory =
  | "food"
  | "transport"
  | "shopping"
  | "bills";

export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: ExpenseCategory;
};

const initialExpenses: Expense[] = [
  {
    id: 1,
    title: "Lunch",
    amount: 5000,
    category: "food"
  },
  {
    id: 2,
    title: "Uber",
    amount: 3500,
    category: "transport"
  },
  {
    id: 3,
    title: "T-shirt",
    amount: 15000,
    category: "shopping"
  }
];

function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>("food");

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [expenses]);

  const expenseCount = useMemo(() => {
    return expenses.length;
  }, [expenses]);

  const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "" || amount.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const numericAmount = Number(amount);

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      alert("Amount must be a valid number greater than 0");
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      title: title.trim(),
      amount: numericAmount,
      category
    };

    setExpenses(currentExpenses => [
      ...currentExpenses,
      newExpense
    ]);

    setTitle("");
    setAmount("");
    setCategory("food");
  }, [title, amount, category])

  const deleteExpense = useCallback((id: number) => {
    setExpenses(currentExpenses =>
      currentExpenses.filter(expense => expense.id !== id)
    );
  }, [])

  return (
    <div>
      <ExpenseForm
        onSubmitHandler={onSubmitHandler}
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
      />
      <p>Total Expenses: {totalExpenses}</p>
      <p>Number of expenses: {expenseCount}</p>
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense}/>
    </div>
  )
}

export default ExpenseTracker;