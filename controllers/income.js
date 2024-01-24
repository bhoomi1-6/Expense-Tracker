const IncomeSchema =  require("../models/IncomeModel")


exports.addIncome = async (req,res) =>{
    const {title,amount,category,description,date}=req.body

    //create instance
    const income = IncomeSchema ({
        title,
        amount,
        category,
        description,
        date
    })   
    
    //try to save to database
    try{
        //validations
        if(!title|| !category || !description ||!amount ||!date){
            return res.status(400).json({message: "all fields are required!"})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message: "amount must be positive"})
        }
        await income.save()
        res.status(200).json({message:'Income Added'})
    } catch(error){
        console.error("Error:",error);
        res.status(500).json({message:'Server Error'});
}
    
    console.log(income)
}

exports.getIncomes = async (req,res) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)

    }  catch(error){
        res.status(500).json({message:'Server Error'})

    }
}

exports.deleteIncome = async (req,res) => {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then((income) =>{
        res.status(200).json({message:'Income Deleted'})
    })
        .catch((err) => {

            res.status(500).json({message:'Server Error'})
        })
       

    }  
        

    
