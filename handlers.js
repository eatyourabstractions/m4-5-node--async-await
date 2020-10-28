// nothing here yet...
const {getDadJoke} = require('./__workshop/exercise-4.1')
const {getTronaldDumpQuote} = require('./__workshop/exercise-4.2')
const {getGeekJoke} = require('./__workshop/exercise-4.3')

const handleJoke = async (type) =>{
    try {   
        switch (type) {
            case 'dad':
                let dadJoke = await getDadJoke()
                return dadJoke

            case 'geek':
                let geekJoke = await getGeekJoke()
                return geekJoke

            case 'tronald':
                let trumpQuote = await getTronaldDumpQuote()
                return trumpQuote
                
            default:
                break;
        }
        
    } catch (error) {
        return error
    }
}





module.exports = { handleJoke };
