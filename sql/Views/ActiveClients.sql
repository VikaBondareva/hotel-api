USE [BowserHotel]
GO

/****** Object:  View [dbo].[ClientsActive]    Script Date: 11/23/2019 1:20:30 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


ALTER VIEW [dbo].[ClientsActive]
AS
SELECT        dbo.Clients.clientId, dbo.Clients.name, dbo.Clients.surname, '+'+CONVERT(VARCHAR, Countires.phoneCode)+''+CONVERT(VARCHAR, Clients.phoneNumber) as phoneNumber , dbo.Clients.email, dbo.Countires.phoneCode,
              COUNT(Bookings.clientId) as bookingCount
FROM            dbo.Clients INNER JOIN
                         dbo.Bookings ON dbo.Clients.clientId = dbo.Bookings.clientId INNER JOIN
                         dbo.Countires ON dbo.Clients.phoneCountryId = dbo.Countires.countryId
			  GROUP BY Clients.clientId, dbo.Clients.name, dbo.Clients.surname, dbo.Clients.phoneNumber, dbo.Clients.email, dbo.Countires.phoneCode
			  HAVING COUNT(Bookings.clientId) > 3
GO


