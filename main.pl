use Mojolicious::Lite;
use Mojo::SQLite;
my $app = app;
my $static = $app->static;
#Initializing static files directory which is current directory
push @{$static->paths}, ($ENV{PWD});

#initializing database url
my $sql = Mojo::SQLite->new('sqlite:appointment.db');
my $db = $sql->db;

#initial route to get the front end
get '/' => sub {
    my $self = shift;
	$self->redirect_to('/app/index.html');
};

#route to get searched appointments
get '/search' => sub {
	my $self = shift;
	my $search = $self->param('search');
	my $results = $db->query("select appointment_id, date, time, description from appointment where description like '%".$search."%'");
	$self->render(json => {appointments => $results->hashes});
};

#route to get stylesheet
get '/css/app.css' => sub {
	my $self = shift;
    $self->redirect_to('/app.css');
};

#route to get javascript
get '/js/app.js' => sub {
	my $self = shift;
    $self->redirect_to('/app.js');
};

#post request route to process form data
post '/' => sub {
	my $self = shift;
	my $date = $self->param('date');
	my $time = $self->param('time');
	my $description = $self->param('description');
	$db->query('insert into appointment (date, time, description) values (?, ?, ?)', $date, $time, $description);
	$self->redirect_to('/app/index.html');
};

#app start
$app->start;