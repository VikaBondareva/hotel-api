
declare client_cursor cursor GLOBAL TYPE_WARNING 
	for select Clients.clientId,CAST(Clients.name+ ' '+ Clients.surname AS nvarchar(30)) as fullname ,
				Bookings.bookingId, Bookings.countPersons, Bookings.countPersons*Rooms.price as price
	from Clients left join Bookings on Clients.clientId = Bookings.clientId
	inner join Rooms on Bookings.roomId = Rooms.roomId
	order by Bookings.bookingId
	FOR READ ONLY  
go

open client_cursor
go

declare @id_cl int, @id_booking int, @fname nvarchar(30), @cperson int, @price money, @s int,@d money, @message nvarchar(80), @sname nvarchar(50)
set @s = 0

fetch next from client_cursor
	into @id_cl, @fname, @id_booking, @cperson, @price
	
WHILE @@FETCH_STATUS=0
	begin
		select @message = 'Client '+@fname+ ', Booking Id '+ cast(@id_booking as nvarchar(10))+ ', Room price: '+cast(@price as nvarchar(10))
		print @message

		declare payments_cursor cursor for
			select (Payments.price* (1 - Payments.discount)) as price, Services.name
			from Payments 
				left join Services on Payments.serviceId = Services.serviceId
				where Payments.bookingId = @id_booking
				order by Payments.bookingId

		--###--start calculate summary price--
		open payments_cursor
		fetch next from payments_cursor
		  into  @d, @sname

		while @@FETCH_STATUS = 0
			begin 
				SELECT @message='Service: '+@sname+', Price: '+CAST(@d AS nvarchar(6))
				print @message;

				set @s = @s + @d

				fetch next from payments_cursor
					into  @d, @sname
			end
		close payments_cursor
		DEALLOCATE  payments_cursor

		--###--print calculate summary price--
		SELECT @message='Summary price: '+ CAST((@s + @price) as nvarchar(6))
		PRINT @message
		set @s = 0

		-- переход к следующему клиенту--
		fetch next from client_cursor
			into @id_cl, @fname, @id_booking, @cperson, @price;
	end 

close client_cursor;
go
DEALLOCATE  client_cursor;
go
