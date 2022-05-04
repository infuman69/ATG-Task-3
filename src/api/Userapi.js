import axios from "axios";

export  const Usercall = async () => {
    try{
        const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
        return response.data
    }
    catch(err){
        console.log(err)
    }

}