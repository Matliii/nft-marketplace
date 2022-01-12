import React from 'react'
import Punklist from '../Punklist'
import Main from '../Main'

const Firstpage = ({punkListData, selectedPunk, setSelectedPunk}) => {
    return (
        <>
            {
            punkListData.length > 0 && (
                <>
                <Main 
                punkListData={punkListData} 
                selectedPunk={selectedPunk} />
                <Punklist 
                punkListData={punkListData} 
                setSelectedPunk={setSelectedPunk}/>
                </>
            )}
            
        </>
    )
}

export default Firstpage
