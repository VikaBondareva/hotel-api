CREATE PROCEDURE SelectShedulesService
	@serviceId int
AS
BEGIN
	SELECT * FROM Shedule
		WHERE Shedule.serviceId = @serviceId
			ORDER BY Shedule.dayOfWeek ASC
END
GO
