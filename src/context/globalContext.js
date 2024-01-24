import React from "react"
import axios from 'axios'
import { useState } from "react";
import { useContext } from "react";

const BASE_URL  = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children})=> {

    const [incomes,setIncomes] = useState([]) // by default empty array
    const [expenses,setExpenses] = useState([]) // by default empty array
    const [error,setError] = useState(null)

    //add content to databaseeee
    const addIncome = async (income) => {    //you wanna send data thats why (income)
        const response = await axios.post(`${BASE_URL}add-income`,income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    // const deleteIncome = async (id) => {
    //     const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
    //     getIncomes()
    // }

    const deleteIncome = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
            console.log('Delete Income Response:', res.data);
            getIncomes();
        } catch (error) {
            console.error('Error deleting income:', error);
        }
    }
    

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

      //calculate incomes
      const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }




    return (
        <GlobalContext.Provider  value={{
            addIncome,   //will add more files here
            getIncomes,
            deleteIncome,
            incomes,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        
        }}>
        {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)
}
