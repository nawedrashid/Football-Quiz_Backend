const Quizzes = [
	{
		q_id: '0001',
		topic: 'Premier League',
		description: 'Official Football League of England',
		image: 'https://seeklogo.com/images/P/premier-league-logo-7B3F0F173A-seeklogo.com.png',
		bg: 'https://wallpaperaccess.com/full/1401210.jpg',
		maximum: 20,
		questions: 
        [
			{
				question: 'When was the first season played?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001011',
						option: '1892',
						isRight: false,
					},
					{
						_id: '0001012',
						option: '1992',
						isRight: true,
					},
					{
						_id: '0001013',
						option: '1965',
						isRight: false,
					},
					{
						_id: '0001014',
						option: '1999',
						isRight: false,
					}
				]
			},
			{
				question: "Which team is the first to win the league?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001021',
						option: 'Liverpool',
						isRight: false,
					},
					{
						_id: '0001022',
						option: 'Manchester City',
						isRight: false,
					},
					{
						_id: '0001023',
						option: 'Arsenal',
						isRight: false,
					},
					{
						_id: '0001024',
						option: 'Manchester United',
						isRight: true,
					}
				]
			},
			{
				question:
					'Which team won the title most?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001031',
						option: 'Manchester United',
						isRight: true,
					},
					{
						_id: '0001032',
						option: 'Chelsea',
						isRight: false,
					},
					{
						_id: '0001033',
						option: 'Liverpool',
						isRight: false,
					},
					{
						_id: '0001034',
						option: 'Arsenal',
						isRight: false,
					}
				]
			},
			{
				question:
					'Who is the overall Top Scorer of the League?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001041',
						option: 'Sergio Aguero',
						isRight: false,
					},
					{
						_id: '0001042',
						option: 'Wayne Rooney',
						isRight: false,
					},
					{
						_id: '0001043',
						option: 'Alan Shearer',
						isRight: true,
					},
					{
						_id: '0001044',
						option: 'Cristiano Ronaldo',
						isRight: false,
					}
				]
			},
			{
				question: 'Which stadium is the biggest in the league ?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001051',
						option: 'Old Trafford',
						isRight: true,
					},
					{
						_id: '0001052',
						option: 'Emirates Stadium',
						isRight: false,
					},
					{
						_id: '0001053',
						option: 'Stamford Bridge',
						isRight: false,
					},
					{
						_id: '0001054',
						option: "Anfield",
						isRight: false,
					}
				]
			}
        ]
    },
    {
       q_id: '0002',
		topic: 'La Liga',
		description: 'Official Football League of Spain',
		image: 'https://seeklogo.com/images/L/laliga-somalia-fans-logo-860A94A6EB-seeklogo.com.png',
		bg: 'https://assets.laliga.com/assets/2021/07/28/large/72c211cd85966412c187ae7e6abd33b6.jpeg',
		maximum: 20,
		questions: 
        [
			{
				question: 'When was the first season played?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001011',
						option: '1975',
						isRight: false,
					},
					{
						_id: '0001012',
						option: '1929',
						isRight: true,
					},
					{
						_id: '0001013',
						option: '1953',
						isRight: false,
					},
					{
						_id: '0001014',
						option: '1936',
						isRight: false,
					}
				]
			},
			{
				question: "Which team is the first to win the league?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001021',
						option: 'Barcelona',
						isRight: true,
					},
					{
						_id: '0001022',
						option: 'Real Madrid',
						isRight: false,
					},
					{
						_id: '0001023',
						option: 'Athletic Club',
						isRight: false,
					},
					{
						_id: '0001024',
						option: 'Sevilla',
						isRight: false,
					}
				]
			},
			{
				question:
					'Which team won the title most?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001031',
						option: 'Villarreal',
						isRight: false,
					},
					{
						_id: '0001032',
						option: 'Sevilla',
						isRight: false,
					},
					{
						_id: '0001033',
						option: 'Getafe',
						isRight: false,
					},
					{
						_id: '0001034',
						option: 'Real Madrid',
						isRight: true,
					}
				]
			},
			{
				question:
					'Who is the overall Top Scorer of the League?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001041',
						option: 'Cristiano Ronaldo',
						isRight: false,
					},
					{
						_id: '0001042',
						option: 'Telmo Zarra',
						isRight: false,
					},
					{
						_id: '0001043',
						option: 'Lionel Messi',
						isRight: true,
					},
					{
						_id: '0001044',
						option: 'Karim Benzama',
						isRight: false,
					}
				]
			},
			{
				question: 'Which stadium is the biggest in the league ?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001051',
						option: 'Camp Nou',
						isRight: true,
					},
					{
						_id: '0001052',
						option: 'Wanda Metropolitano',
						isRight: false,
					},
					{
						_id: '0001053',
						option: 'Santiago Bernabeu',
						isRight: false,
					},
					{
						_id: '0001054',
						option: "Mestalla",
						isRight: false,
					}
				]
			}
        ]
    },
    {
        q_id: '0003',
		topic: 'Bundesliga',
		description: 'Official Football League of Germany',
		image: 'https://seeklogo.com/images/B/bundesliga-logo-03A7CC2961-seeklogo.com.png',
		bg:'https://wallpaperaccess.com/full/2777236.jpg',
		maximum: 20,
		questions: 
        [
			{
				question: 'When was the first season played?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001011',
						option: '1964',
						isRight: false,
					},
					{
						_id: '0001012',
						option: '1963',
						isRight: true,
					},
					{
						_id: '0001013',
						option: '1845',
						isRight: false,
					},
					{
						_id: '0001014',
						option: '1985',
						isRight: true,
					}
				]
			},
			{
				question: "Which team is the first to win the league?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001021',
						option: 'Hannover 96',
						isRight: false,
					},
					{
						_id: '0001022',
						option: 'Schalke 04',
						isRight: false,
					},
					{
						_id: '0001023',
						option: 'Bayern Munich',
						isRight: true,
					},
					{
						_id: '0001024',
						option: 'Borussia Dortmund',
						isRight: false,
					}
				]
			},
			{
				question:
					'Which team won the title most?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001031',
						option: 'Hertha Berlin',
						isRight: false,
					},
					{
						_id: '0001032',
						option: 'Hoffenheim',
						isRight: false,
					},
					{
						_id: '0001033',
						option: 'Bayern Munich',
						isRight: true,
					},
					{
						_id: '0001034',
						option: 'Borussia Dortmund',
						isRight: false,
					}
				]
			},
			{
				question:
					'Who is the overall Top Scorer of the League?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001041',
						option: 'Gerd Muller',
						isRight: true,
					},
					{
						_id: '0001042',
						option: 'Klaus Fischer',
						isRight: false,
					},
					{
						_id: '0001043',
						option: 'Robert Lewandowski',
						isRight: false,
					},
					{
						_id: '0001044',
						option: 'Ulf Kirsten',
						isRight: false,
					}
				]
			},
			{
				question: 'Which stadium is the biggest in the league ?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001051',
						option: 'Signal Iduna Park',
						isRight: true,
					},
					{
						_id: '0001052',
						option: 'Allianz Arena',
						isRight: false,
					},
					{
						_id: '0001053',
						option: 'Mercedes-Benz Arena',
						isRight: false,
					},
					{
						_id: '0001054',
						option: "Red Bull Arena",
						isRight: false,
					}
				]
			}
        ]
    },
    {
        q_id: '0004',
		topic: 'Serie A',
		description: 'Official Football League of Italy',
		image: 'https://seeklogo.com/images/S/serie-a-tim-liga-italiana-logo-06A61E6391-seeklogo.com.png',
		bg:'https://sportskhabri.com/wp-content/uploads/2021/01/Serie-A-TIM-SPONSORS-Brand-Partners-Investors-Investments-Financials-Commercials-Advertisers-Broadcasters.png',
		maximum: 20,
		questions: 
        [
			{
				question: 'When was the first season played?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001011',
						option: '1964',
						isRight: false,
					},
					{
						_id: '0001012',
						option: '1954',
						isRight: false,
					},
					{
						_id: '0001013',
						option: '1937',
						isRight: false,
					},
					{
						_id: '0001014',
						option: '1929',
						isRight: true,
					}
				]
			},
			{
				question: "Which team is the first to win the league?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001021',
						option: 'AC Milan',
						isRight: false,
					},
					{
						_id: '0001022',
						option: 'Internazionale',
						isRight: true,
					},
					{
						_id: '0001023',
						option: 'Juventus',
						isRight: false,
					},
					{
						_id: '0001024',
						option: 'Napoli',
						isRight: false,
					}
				]
			},
			{
				question:
					'Which team won the title most?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001031',
						option: 'AC Milan',
						isRight: false,
					},
					{
						_id: '0001032',
						option: 'Napoli',
						isRight: false,
					},
					{
						_id: '0001033',
						option: 'Juventus',
						isRight: true,
					},
					{
						_id: '0001034',
						option: 'AS Roma',
						isRight: false,
					}
				]
			},
			{
				question:
					'Who is the overall Top Scorer of the League?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001041',
						option: 'Silvio Piola',
						isRight: true,
					},
					{
						_id: '0001042',
						option: 'Gunnar Nordahi',
						isRight: false,
					},
					{
						_id: '0001043',
						option: 'Francesco Totti',
						isRight: false,
					},
					{
						_id: '0001044',
						option: 'Giuseppe Meazza',
						isRight: false,
					}
				]
			},
			{
				question: 'Which stadium is the biggest in the league ?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001051',
						option: 'San Siro',
						isRight: true,
					},
					{
						_id: '0001052',
						option: 'Stadio San Nicola',
						isRight: false,
					},
					{
						_id: '0001053',
						option: 'Stadio Olimpico',
						isRight: false,
					},
					{
						_id: '0001054',
						option: "Stadio Diego Armando Maradona",
						isRight: false,
					}
				]
			}
        ]
    },
	{
        q_id: '0005',
		topic: 'Ligue 1',
		description: 'Official Football League of France',
		image: 'https://seeklogo.com/images/L/ligue-1-uber-eats-logo-E440240623-seeklogo.com.png',
		bg:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/66291f11733074.56031f149bf9f.jpg',
		maximum: 20,
		questions: 
        [
			{
				question: 'When was the first season played?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001011',
						option: '1957',
						isRight: false,
					},
					{
						_id: '0001012',
						option: '1946',
						isRight: false,
					},
					{
						_id: '0001013',
						option: '1984',
						isRight: false,
					},
					{
						_id: '0001014',
						option: '1932',
						isRight: true,
					}
				]
			},
			{
				question: "Which team is the first to win the league?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001021',
						option: 'PSG',
						isRight: false,
					},
					{
						_id: '0001022',
						option: 'Olympique Lillois',
						isRight: true,
					},
					{
						_id: '0001023',
						option: 'Saint Etienne',
						isRight: false,
					},
					{
						_id: '0001024',
						option: 'Monaco',
						isRight: false,
					}
				]
			},
			{
				question:
					'Which team won the title most?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001031',
						option: 'PSG',
						isRight: false,
					},
					{
						_id: '0001032',
						option: 'Saint Etienne',
						isRight: false,
					},
					{
						_id: '0001033',
						option: 'Both a and b',
						isRight: true,
					},
					{
						_id: '0001034',
						option: 'Lille',
						isRight: false,
					}
				]
			},
			{
				question:
					'Who is the overall Top Scorer of the League?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001041',
						option: 'Delio Onnis',
						isRight: true,
					},
					{
						_id: '0001042',
						option: 'Bernard Lacombe',
						isRight: false,
					},
					{
						_id: '0001043',
						option: 'Roger Courtois',
						isRight: false,
					},
					{
						_id: '0001044',
						option: 'Carlos Bianchi',
						isRight: false,
					}
				]
			},
			{
				question: 'Which stadium is the biggest in the league ?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						_id: '0001051',
						option: 'Stade Velodrome',
						isRight: true,
					},
					{
						_id: '0001052',
						option: 'Parc des Princes',
						isRight: false,
					},
					{
						_id: '0001053',
						option: 'Allianz Riviera',
						isRight: false,
					},
					{
						_id: '0001054',
						option: "Stade Pierre-Mauroy",
						isRight: false,
					}
				]
			}
        ]
    }
];

module.exports = { Quizzes }