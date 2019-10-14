USE [BowserHotel]
GO

Create VIEW [dbo].[CuntPersonsBookingService]
AS
SELECT        dbo.Services.serviceId, dbo.Services.maxPerson, dbo.Payments.startTime, 
				dbo.Payments.endTime, dbo.Payments.datePay, COUNT(Payments.paymentId) as countPersons
FROM     dbo.Services INNER JOIN
          dbo.Payments ON dbo.Services.serviceId = dbo.Payments.serviceId
		  GROUP BY  dbo.Services.serviceId, dbo.Services.maxPerson, dbo.Payments.startTime, 
				dbo.Payments.endTime, dbo.Payments.datePay
GO


