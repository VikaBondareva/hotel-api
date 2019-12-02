USE [BowserHotel]
GO

create VIEW [dbo].[PaymentsServices]
AS
SELECT        dbo.Payments.paymentId, dbo.Payments.datePay, dbo.Payments.startTime, dbo.Payments.endTime, dbo.Services.serviceId, dbo.Services.name, dbo.Payments.discount, dbo.Payments.price, 
			((1-IIF(Payments.discount IS NULL, 0, Payments.discount))*Payments.price) as totalPrice, dbo.Payments.status
FROM            dbo.Payments INNER JOIN
                         dbo.Services ON dbo.Payments.serviceId = dbo.Services.serviceId
GO


