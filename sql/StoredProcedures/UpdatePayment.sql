CREATE PROCEDURE UpadatePayment
	@paymentId int, @status nvarchar(10),
	@date date, @startTime time, @endTime time
AS
BEGIN
	DECLARE @currentStatus nvarchar(10);
	SET @currentStatus = (SELECT status FROM Payments WHERE paymentId = @paymentId);

	IF @currentStatus = 'pending' AND @status IS NULL
	 BEGIN 
		UPDATE Payments
		SET datePay = @date, startTime = @startTime, endTime = @endTime,
			bookingDate = GETDATE()
		WHERE paymentId = @paymentId
	 END
	ELSE
	  BEGIN 
		UPDATE Payments
			SET status = @status
			WHERE paymentId = @paymentId
	  END
END
GO
