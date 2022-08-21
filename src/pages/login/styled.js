import styled from  "styled-components"



const Cardes = styled.div`
   display: flex ;
   flex-wrap: wrap ;
   
   margin:  10em ;
   margin-left: 30em ;
   margin-right: 20em ;




 .conteiner-cardes {
   

   align-items: center ;
   margin: 10px ;
    
    padding-right: 3em ;
    padding-left: 2em ;
    padding-bottom: 2em ;
    background-color: #ffffff ;
 }

.login {
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    padding: 15px ;
    padding-bottom: 30px ;
    .imagem-login {
     
        padding-right: 20px ;
    }
}

 img {
    height:20px ;
    width: 20px ;
   }


   .informacoes {
    padding-top: 2em ;
   align-items: center ;

    .idade {
        margin-left: 6.4em  ;
    }
    .nascimento {
        margin-left: 4em  ;
    }
   }






`

export default Cardes