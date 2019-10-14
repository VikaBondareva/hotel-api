USE BowserHotel
GO

CREATE PROCEDURE InsertSheduleService
	@serviceId int, @dayOfWeek int, 
	@startTime time, @endTime time,
	@startLunch time, @endLunch time
AS
BEGIN

	IF EXISTS (SELECT * FROM Shedule WHERE serviceId = @serviceId AND dayOfWeek = @dayOfWeek) RETURN 0;

	BEGIN TRY
		INSERT INTO Shedule 
			VALUES (@serviceId, @dayOfWeek, @startTime, @endTime, @startLunch, @endLunch);
		RETURN 1;
	END TRY
	BEGIN CATCH
	 	PRINT 'Error ' + CONVERT(VARCHAR, ERROR_NUMBER()) + ':' + ERROR_MESSAGE();
		 RETURN 0
    END CATCH	
END
GO
