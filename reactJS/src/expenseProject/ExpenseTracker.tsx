import { useCallback, useMemo, useReducer, useState, type FormEvent } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export type ExpenseCategory =
  | "food"
  | "transport"
  | "shopping"
  | "bills";


type Action =
  | {
      type: "ADD_EXPENSE";
      payload: Expense;
    }
  | {
      type: "DELETE_EXPENSE";
      payload: number;
    };

type State = {
  expenses: Expense[];
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload
        )
      };

    default:
      return state;
  }
}

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
  //const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>("food");

  const [state, dispatch] = useReducer(reducer, { expenses: initialExpenses });

  const totalExpenses = useMemo(() => {
    return state.expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [state.expenses]);

  const expenseCount = useMemo(() => {
    return state.expenses.length;
  }, [state.expenses]);

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

    dispatch({
      type: "ADD_EXPENSE",
      payload: newExpense
    });
    setTitle("");
    setAmount("");
    setCategory("food");
  }, [title, amount, category])

  const deleteExpense = useCallback((id: number) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id
    });
  }, []);

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
      <ExpenseList expenses={state.expenses} onDeleteExpense={deleteExpense}/>
    </div>
  )
}

export default ExpenseTracker;