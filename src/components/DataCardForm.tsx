import React, { useState } from 'react'
import './DataCardForm.css'

const DataCardForm = () => {

    const [cardNumber, setCardNumber] = useState<string>()
    const [cardCvv, setCardCvv] = useState<string>()
    const [payerName, setPayerName] = useState<string>()
    const [documentType, setDocumentType] = useState<string>()
    const [documentNumber, setDocumentNumber] = useState<string>();

    return (
        <div className='cardFormContainer'>
            <form>
                <label>
                    <span>Document Type</span>
                    <select name="documents" id="documents">
                        <option value="rg">RG</option>
                        <option value="cpf">CPF</option>
                    </select>
                </label>
                <label>
                    <span>Document Number:</span>
                    <input type="text" value={documentNumber} required />
                </label>
                <label>
                    <span>Card Number:</span>
                    <input type="text" value={cardNumber} required />
                </label>
                <label>
                    <span>Card Cvv:</span>
                    <input type="text" value={cardCvv} required />
                </label>
                <label>
                    <span>Payer Name:</span>
                    <input type="text" value={cardCvv} required />
                </label>
                <input type="submit" value='Pagar'/>
            </form>
        </div>
    )
}

export default DataCardForm