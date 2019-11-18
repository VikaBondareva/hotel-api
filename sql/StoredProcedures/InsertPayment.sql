CREATE PROCEDURE InsertPayment
	@bookingId int,
	@serviceId int, 
	@date date,
	@startTime time,
	@endTime time,
	@discountId int
AS
BEGIN
    IF EXISTS (SELECT * FROM Payments WHERE bookingId = @bookingId AND serviceId = @serviceId)  RETURN 0;

	IF EXISTS (SELECT * FROM Bookings WHERE bookingId = @bookingId) 

		DECLARE @discount float, @price float, @dateArrival date, @departureDate date;

		SET @discount = IIF(@discountId IS NULL, 0.0,
			(SELECT Discounts.count FROM Discounts WHERE discountId = @discountId));

		SET @price = (SELECT Services.ptice FROM Services WHERE serviceId = @serviceId);

		SET @dateArrival = (SELECT arrivalDate FROM Bookings WHERE Bookings.bookingId = @bookingId);
		SET @departureDate = (SELECT departureDate FROM Bookings WHERE Bookings.bookingId = @bookingId);

		IF @date >= @dateArrival AND @date <= @departureDate
		  BEGIN
				INSERT INTO Payments 
					VALUES (@bookingId, @serviceId, @date, @startTime, @endTime, @discount, @price, GETDATE(), 'pending');
				RETURN 1;
			END
		ELSE  RETURN 0;
		-- PRINT 'The service reservation date is less than the arrival date or longer than the departure date';
END
GO
