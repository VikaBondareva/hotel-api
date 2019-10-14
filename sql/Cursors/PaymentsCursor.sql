declare
@roomId nvarchar(10),
@bookingId nvarchar(10),
@date nvarchar(10),
@countPerson nvarchar(10),
@messsage nvarchar(max)

declare Rooms_cursor cursor global for
	select cast(Rooms.roomId as nvarchar(10)) ,  cast(bookingId as nvarchar(10)), cast(arrivalDate as nvarchar(10)) ,cast(countPersons as nvarchar(10)) 
	from Rooms inner join Bookings on Rooms.roomId = Bookings.roomId
	order by Rooms.roomId 

open Rooms_cursor
	fetch next from Rooms_cursor into @roomId,@bookingId,@date,@countPerson
	while @@FETCH_STATUS=0
	begin
		select @messsage = 'Room: ' +@roomId+', Booking: '+@bookingId +', Arrival date:' + @date +', Persons: '+@countPerson
		print @messsage
		fetch next from Rooms_cursor into @roomId,@bookingId,@date,@countPerson
	end
close Rooms_cursor
DEALLOCATE Rooms_cursor