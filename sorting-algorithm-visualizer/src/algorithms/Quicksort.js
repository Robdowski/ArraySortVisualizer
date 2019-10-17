export const defaultComparator = (a, b) =>{
    if (a < b){
        return -1
    }
    else if(a > b) {
        return 1
    } else {
        return 0
    }
}


export const quickSort = (array, comparator = defaultComparator) => {
    const sortedArray = [...array]

    const recursiveSort = (start, end) =>{
        if (end - start < 1){
            return
        }
        const pivotValue = sortedArray[end]
        let splitIndex = start

        for (let i = 0; i < end; i++){
            const sort = comparator(sortedArray[i], pivotValue)
            if(sort === -1){
                if(splitIndex !== i){
                    const temp = sortedArray[splitIndex];
                    sortedArray[splitIndex] = sortedArray[i];
                    sortedArray[i] = temp;
                }
                splitIndex++
            }
        }
        sortedArray[end] = sortedArray[splitIndex]
        sortedArray[splitIndex] = pivotValue

        recursiveSort(start, splitIndex-1)
        recursiveSort(splitIndex+1, end)
    }

    recursiveSort(0, array.length-1)
    return sortedArray
}