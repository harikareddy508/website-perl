==================================================================
STEPS TO RUN APPLICATION
==================================================================

1) run following commands on Linux system: assuming we have CPAN up and running
	a) sudo cpan Mojolicious
	b) sudo cpan Mojo::SQLite
	c) sudo cpan YAML
	d) sudo cpan TAP::Harness
	Above commands will install all the dependencies 
	Execute following command to start development server 'morbo main.pl' in current directory
	You can access application at http://localhost:3000/

2) Assumptions:
	a) Assuming we have appointment.db in current directory
	b) We can run the same application without any hassel on apache too, but development server is quite simple to test out the application
	c) Used Mojolicious framework of perl to have explicit control of route and corresponding subroutines to be called


IMPORTANT NOTES:
1) Instead of providing explicit search button I provide search box which will search appointments with description,
       I implemented it more like instant search
2) I used few more libraries for date picker, time picker to make it look good


Thanks for giving this exercise, I got a chance to learn Perl/Mojolicious :). Hope to hear from you soon!!