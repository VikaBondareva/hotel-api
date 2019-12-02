USE [BowserHotel]
GO

/****** Object:  View [dbo].[EmployeeService]    Script Date: 9/24/2019 9:39:31 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[EmployeeService]
AS
SELECT        dbo.Employees.employeeId, dbo.Employees.name, dbo.Employees.surname, dbo.Employees.phoneNumber, dbo.Payments.paymentId, dbo.Services.serviceId, dbo.Services.name AS serviceName, 
                         dbo.EmployeesPayments.status
FROM            dbo.Payments INNER JOIN
                         dbo.Services ON dbo.Payments.serviceId = dbo.Services.serviceId INNER JOIN
                         dbo.EmployeesPayments ON dbo.Payments.paymentId = dbo.EmployeesPayments.paymentId INNER JOIN
                         dbo.Employees ON dbo.EmployeesPayments.employeeId = dbo.Employees.employeeId
GO


