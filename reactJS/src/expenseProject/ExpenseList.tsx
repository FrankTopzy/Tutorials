import React from 'react'
import type { Expense } from "./ExpenseTracker";
import ExpenseItem from './ExpenseItem';

type ExpenseListProps = {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
};

function ExpenseList({ expenses, onDeleteExpense}: ExpenseListProps) {
  return (
    <div>
      {
        expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDeleteExpense}
          />
        ))
      }
    </div>
  )
}

export default ExpenseList