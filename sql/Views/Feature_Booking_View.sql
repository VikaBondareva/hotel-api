USE [BowserHotel]
GO

/****** Object:  View [dbo].[Feature_Bookigns_View]    Script Date: 11/23/2019 1:15:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


ALTER view [dbo].[Feature_Bookigns_View] as
select  bookingId, Clients.clientId, Clients.name+' '+Clients.surname as fullname, arrivalDate, countPersons,'+'+CONVERT(VARCHAR, Countires.phoneCode)+''+CONVERT(VARCHAR, Clients.phoneNumber) as phoneNumber , Clients.email
from Bookings inner join Clients on Bookings.clientId = Clients.clientId
left join Countires on Clients.phoneCountryId = Countires.countryId
where Bookings.arrivalDate >= getdate();
GO


