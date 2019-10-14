-- ================================================
-- Template generated from Template Explorer using:
-- Create Trigger (New Menu).SQL
USE BowserHotel
GO

create trigger Payments_Delete
On Payments
INSTEAD OF DELETE
as 
 update Payments
 set status = 'canceled'
 where paymentId =(select paymentId from deleted)