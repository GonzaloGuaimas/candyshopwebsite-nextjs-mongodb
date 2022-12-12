export const formatCurrency = (value: Number) => {
	try{
		return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
	}catch(e){
		return 0
	}
	
}