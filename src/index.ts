
class Console{

       default=(text:string)=>{
       console.log(`\x1b[30m\x1b[47m🤍 ${text} \x1b[0m`);
       }
       success=(text:any)=>{
       console.log(`\x1b[42m✅ ${text} \x1b[0m`);
       }
       error=(text:any)=>{
       console.log(`\x1b[37m\x1b[41m❌ ${text} \x1b[0m`);
       }
       warning =(text:string)=>{
       console.log(`\x1b[34m\x1b[43m⚠️ ${text} \x1b[0m`);
       }
       continue=(text:string)=>{
       console.log(`\x1b[96m\x1b[105m🚀 ${text} \x1b[0m`);
       }
       primary=(text:string)=>{
        console.log(`\x1b[35m\x1b[46m🎨 ${text} \x1b[0m`); 
       }
       red=(text:string)=>{
        console.log(`\x1b[31m🚨 ${text} \x1b[0m`); 
       }
       yellow=(text:string)=>{
        console.log(`\x1b[93m🔥 ${text} \x1b[0m`); 
       }
       bold=(text:string)=>{
        console.log(`\x1b[1m📌 ${text} \x1b[0m`); 
       }
       green=(text:string)=>{
       console.log(`\x1b[1m\x1b[92m🌈 ${text} \x1b[0m`); 
       }
       underlined=(text:string)=>{
       console.log(`\x1b[4m ${text} \x1b[0m`);
       }
       underlined_Bright=(text:string)=>{
       console.log(`\x1b[4m\x1b[96m ${text} \x1b[0m`);
       }
       heart=()=>{
       console.log(`
       .:::.   .:::.
      :::::::.:::::::
      :::::::::::::::
       ':::::::::::'
         ':::::::'
           ':::'
             '

              `)     
       }
       hii=()=>{
       console.log(`
#     #  ###  ### 
#     #   #    #  
#     #   #    #  
# # # #   #    #  
#     #   #    #  
#     #   #    #  
#     #  ###  ### 

              `) 
       }
       blue=(text:string)=>{
       console.log(`\x1b[1m\x1b[34m ${text} \x1b[0m`);
       }

       gray=(text:string)=>{
        console.log(`\x1b[1m\x1b[90m ${text} \x1b[0m`);
       }

       pink=(text:string)=>{
       console.log(`\x1b[1m\x1b[35m ${text} \x1b[0m`); 
       }

}

export const Log=new Console()

// Log.default('hello')
// Log.success("hello")
// Log.error("hello")
// Log.warning("hello")
// Log.continue("hello")
// Log.primary("hello")
// Log.red("hello")
// Log.yellow("hello")
// Log.bold("hello")
// Log.green("hello")
// Log.underlined("hello")
// Log.underlined_Bright("hello")
// Log.heart()
// Log.hii()
// Log.blue("hello")
// Log.gray("hello")
// Log.pink("hello")

