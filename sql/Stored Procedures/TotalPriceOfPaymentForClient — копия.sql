CREATE PROCEDURE TotlaricePaymentsOfBooking 
	@bookingId int,
	@totalPrie money OUTPUT
AS
BEGIN
	SET @totalPrie =( SELECT SUM(price) as totalPrice
			FROM Payments
				WHERE Payments.bookingId = @bookingId)


				
END


-- USE BowserHotel
-- GO

-- DECLARE @totalPrice money;

-- EXEC TotlaricePaymentsOfBooking 39, @totalPrice OUT

-- PRINT @totalPrice  