import React from 'react'
import type { Expense } from './ExpenseTracker';

type ExpenseItemProps = {
  expense: Expense;
  onDelete: (id: number) => void;
};

function ExpenseItem({ expense, onDelete }: ExpenseItemProps) {
  return (
    <div>
      <p>{expense.title}</p>
      <p>${expense.amount.toFixed(2)}</p>
      <p>{expense.category}</p>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  )
}

export default ExpenseItem