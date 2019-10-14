USE [BowserHotel]
GO


ALTER VIEW ComplainsAboutClients
AS
SELECT        dbo.Complaints.complaintId, dbo.Complaints.countComplaints, dbo.Clients.clientId, dbo.Clients.name, dbo.Clients.surname, dbo.Clients.phoneNumber, dbo.Clients.phoneCountryId
FROM            dbo.Complaints INNER JOIN
                         dbo.ComplaintsEmployees ON dbo.Complaints.complaintId = dbo.ComplaintsEmployees.complaintId INNER JOIN
                         dbo.Clients ON dbo.Complaints.clientId = dbo.Clients.clientId
GO


