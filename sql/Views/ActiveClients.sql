USE [BowserHotel]
GO

Create VIEW [dbo].[ClientsActive]
AS
SELECT        dbo.Clients.clientId, dbo.Clients.name, dbo.Clients.surname, dbo.Clients.phoneNumber, dbo.Clients.email, dbo.Countires.phoneCode,
              COUNT(Bookings.clientId) as bookingCount
FROM            dbo.Clients INNER JOIN
                         dbo.Bookings ON dbo.Clients.clientId = dbo.Bookings.clientId INNER JOIN
                         dbo.Countires ON dbo.Clients.phoneCountryId = dbo.Countires.countryId
			  GROUP BY Clients.clientId, dbo.Clients.name, dbo.Clients.surname, dbo.Clients.phoneNumber, dbo.Clients.email, dbo.Countires.phoneCode
			  HAVING COUNT(Bookings.clientId) > 3
GO


