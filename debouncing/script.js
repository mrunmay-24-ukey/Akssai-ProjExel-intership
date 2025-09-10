    const inputElement = document.querySelector('input')
    

    const debounce = (func , wait) => {
        let timerId = 0
        return (...args) => {
            clearTimeout(timerId)
            timerId = setTimeout(() => func(...args) , wait)
        }
    }

    const handleInput = async (e) => {

        
        if (!query) {
            resultsContainer.innerHTML = ""; 
            return;
        }
        

        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        console.log(data)

       
    }

    const debouncedCall = debounce(handleInput , 1000)

    inputElement.addEventListener('input' , debouncedCall)

