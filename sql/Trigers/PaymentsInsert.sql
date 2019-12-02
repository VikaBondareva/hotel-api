-- Create Trigger (New Menu).SQL
USE BowserHotel
GO

create trigger Payments_Insert
On Payments
for insert
as 
declare @date date,@payId int,@startTime time,  @isError int = 10, @arrivalDate date, @departureDate date, @idService int, @countPersons int;
IF NOT exists (select * from Bookings, inserted where Bookings.bookingId = inserted.bookingId) 
set @isError = 0;

select @date = datePay, @payId = paymentId,@startTime = startTime  from inserted;
select @arrivalDate = Bookings.arrivalDate, @departureDate = Bookings.departureDate , @idService = inserted.serviceId  from Bookings, inserted where Bookings.bookingId = inserted.bookingId
 
if datediff(DAY, @arrivalDate, @date) < 0 set @isError = 0;
if datediff(DAY, @date, @departureDate) < 0 set @isError = 0;

if @isError = 0
BEGIN
PRINT 'Wrong date nookingservice'		
ROLLBACK TRANSACTION 		
END

set @countPersons = (select COUNT(*) from Payments where serviceId = @idService and datePay = @date and startTime = @startTime);
if @countPersons >= (select maxPerson from Services where serviceId = @idService) 
 update Payments 
  set status = 'canceled' where paymentId = @payId;
else 
update Payments 
  set status = 'affected' where paymentId = @payId;

