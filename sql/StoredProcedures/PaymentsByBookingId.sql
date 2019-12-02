
CREATE PROCEDURE SelectPaymentsByBookingId
	@bookingId int
AS
BEGIN
	SELECT paymentId, bookingId, datePay as date, 
		startTime, endTime, bookingDate, Services.name as serviceName, Payments.status, IIF(discount IS NULL, 0,discount) as  discount, 
		Payments.price *DATEDIFF(hh, startTime,endTime) as totalPrice,
		IIF(discount IS NULL,
			Payments.price, 
			(1-discount)* Payments.price *DATEDIFF(hh, startTime,endTime))
			as priceWithDiscount
	FROM Payments
	LEFT JOIN Services ON Payments.serviceId = Services.serviceId
	WHERE bookingId = @bookingId
END
GO
