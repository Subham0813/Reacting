import ExpenseForm from "./ExpanseForm";
import ExpenseTable from "./ExpenseTable";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Tracker() {
  // const expenseData = [
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Milk",
  //     category: "Grocery",
  //     amount: 40,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Shirt",
  //     category: "Clothes",
  //     amount: 600,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Vegetables",
  //     category: "Grocery",
  //     amount: 100,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Electricity Bill",
  //     category: "Bills",
  //     amount: 40,
  //   },
  // ];

  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [data, setData] = useLocalStorage('data', {
    title: "",
    category: "",
    amount: "",
  });
  const [btnName, setBtnName] = useLocalStorage('btnName', '');

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          data={data}
          setData={setData}
          btnName={btnName}
          setBtnName={setBtnName}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setData={setData}
          setBtnName={setBtnName}
        />
      </div>
    </main>
  );
}
