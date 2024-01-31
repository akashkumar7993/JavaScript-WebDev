/*
    Callback Hell
    pyramid of doom
    Inversion of control
*/

// Bookhotel -->  paymentProcess --> ShowBookingStatus  --> updateBookingHistory

bookHotel(hotelId, function(){ // 1
    if (error){
        handleError
    }else{
        proceedToPayment(hotelId, function() { // 2
            if(error){
                handleError
            }else{
                updateBookingHistory(function(){ // 3
                    if (error){
                        handleError
                    }else{
                        success
                    }
                })
            }
        })
    }
})