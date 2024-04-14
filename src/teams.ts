class Team {
    city: string;
    nickname: string;
    abbreviation: string;
    stadium: string;
    location: string;

    constructor(city: string, nickname: string, abbreviation: string, 
        stadium: string, location: string) {
        this.city = city;
        this.nickname = nickname;
        this.abbreviation = abbreviation;
        this.stadium = stadium;
        this.location = location;
    }
}

export function createTeamList(){
    let teams = [
        new Team("Arizona", "Diamondbacks", "ARI", "Chase Field", "Phoenix, AZ"),
        new Team("Atlanta", "Braves", "ATL", "Truist Park", "Atlanta, GA"),
        new Team("Baltimore", "Orioles", "BAL", "Oriole Park at Camden Yards", "Baltimore, MD"),
        new Team("Boston", "Red Sox", "BOS", "Fenway Park", "Boston, MA"),
        new Team("Chicago", "White Sox", "CHW", "Guaranteed Rate Field", "Chicago, IL"),
        new Team("Chicago", "Cubs", "CHC", "Wrigley Field", "Chicago, IL"),
        new Team("Cincinnati", "Reds", "CIN", "Great American Ball Park", "Cincinnati, OH"),
        new Team("Cleveland", "Guardians", "CLE", "Progressive Field", "Cleveland, OH"),
        new Team("Colorado", "Rockies", "COL", "Coors Field", "Denver, CO"),
        new Team("Detroit", "Tigers", "DET", "Comerica Park", "Detroit, MI"),
        new Team("Houston", "Astros", "HOU", "Minute Maid Park", "Houston, TX"),
        new Team("Kansas City", "Royals", "KC", "Kauffman Stadium", "Kansas City, MO"),
        new Team("Los Angeles", "Angels", "LAA", "Angel Stadium", "Anaheim, CA"),
        new Team("Los Angeles", "Dodgers", "LAD", "Dodger Stadium", "Los Angeles, CA"),
        new Team("Miami", "Marlins", "MIA", "Loan Depot Park", "Miami, FL"),
        new Team("Milwaukee", "Brewers", "MIL", "American Family Field", "Milwaukee, WI"),
        new Team("Minnesota", "Twins", "MIN", "Target Field", "Minneapolis, MN"),
        new Team("New York", "Yankees", "NYY", "Yankee Stadium", "The Bronx, NY"),
        new Team("New York", "Mets", "NYM", "Citi Field", "Queens, NY"),
        new Team("Oakland", "Athletics", "OAK", "RingCentral Coliseum", "Oakland, CA"),
        new Team("Philadelphia", "Phillies", "PHI", "Citizens Bank Park", "Philadelphia, PA"),
        new Team("Pittsburgh", "Pirates", "PIT", "PNC Park", "Pittsburgh, PA"),
        new Team("San Diego", "Padres", "SD", "Petco Park", "San Diego, CA"),
        new Team("San Francisco", "Giants", "SF", "Oracle Park", "San Francisco, CA"),
        new Team("Seattle", "Mariners", "SEA", "T-Mobile Park", "Seattle, WA"),
        new Team("St. Louis", "Cardinals", "STL", "Busch Stadium", "St. Louis, MO"),
        new Team("Tampa Bay", "Rays", "TB", "Tropicana Field", "Tampa, FL"),
        new Team("Texas", "Rangers", "TEX", "Globe Life Field", "Arlington, TX"),
        new Team("Toronto", "Blue Jays", "TOR", "Rogers Centre", "Toronto, ON"),
        new Team("Washington", "Nationals", "WAS", "Nationals Park", "Washington, D.C.")
    ]
    return teams;
}