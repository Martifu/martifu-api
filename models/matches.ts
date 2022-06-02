// To parse this data:
//
//   import { Convert, Matches } from "./file";
//
//   const matches = Convert.toMatches(json);

export interface Matches {
    data: Data;
    additional: Additional;
}

export interface Additional {
    parameters: Parameters;
}

export interface Parameters {
    gamertag: string;
    season: null;
    playlist_id: null;
    category_id: null;
}

export interface Data {
    core: Core;
    modes: Modes;
    matches: MatchesClass;
    time_played: TimePlayed;
}

export interface Core {
    summary: Summary;
    damage: Damage;
    shots: Shots;
    rounds: Rounds;
    breakdowns: Breakdowns;
    kda: number;
    kdr: number;
    scores: Scores;
}

export interface Breakdowns {
    kills: Kills;
    assists: Assists;
    vehicles: BreakdownsVehicles;
    medals: Medal[];
}

export interface Assists {
    emp: number;
    driver: number;
    callouts: number;
}

export interface Kills {
    melee: number;
    grenades: number;
    headshots: number;
    power_weapons: number;
    assassinations: number;
    vehicles: KillsVehicles;
    miscellaneous: Miscellaneous;
}

export interface Miscellaneous {
    repulsor: number;
    fusion_coils: number;
}

export interface KillsVehicles {
    splatters: number;
}

export interface Medal {
    id: number;
    count: number;
}

export interface BreakdownsVehicles {
    destroys: Destroy[];
    hijacks: Destroy[];
}

export interface Destroy {
    value: string;
    count: number;
}

export interface Damage {
    taken: number;
    dealt: number;
    average: number;
}

export interface Rounds {
    won: number;
    lost: number;
    tied: number;
}

export interface Scores {
    personal: number;
    points: number;
}

export interface Shots {
    fired: number;
    landed: number;
    missed: number;
    accuracy: number;
}

export interface Summary {
    kills: number;
    deaths: number;
    assists: number;
    betrayals: number;
    suicides: number;
    spawns: number;
    vehicles: SummaryVehicles;
    medals: number;
}

export interface SummaryVehicles {
    destroys: number;
    hijacks: number;
}

export interface MatchesClass {
    outcomes: Outcomes;
    total: number;
    win_rate: number;
}

export interface Outcomes {
    wins: number;
    draws: number;
    losses: number;
    left: number;
}

export interface Modes {
    bomb: null;
    capture_the_flag: CaptureTheFlag;
    elimination: Elimination;
    extraction: null;
    infection: null;
    oddball: Oddball;
    zones: Zones;
    stockpile: Stockpile;
}

export interface CaptureTheFlag {
    flag_capture_assists: number;
    flag_captures: number;
    flag_carriers_killed: number;
    flag_grabs: number;
    flag_returners_killed: number;
    flag_returns: number;
    flag_secures: number;
    flag_steals: number;
    kills_as_flag_carrier: number;
    kills_as_flag_returner: number;
    time_as_flag_carrier: TimePlayed;
}

export interface TimePlayed {
    seconds: number;
    human: string;
}

export interface Elimination {
    allies_revived: number;
    elimination_assists: number;
    eliminations: number;
    enemy_revives_denied: number;
    executions: number;
    kills_as_last_player_standing: number;
    last_players_standing_killed: number;
    rounds_survived: number;
    times_revived_by_ally: number;
}

export interface Oddball {
    kills_as_skull_carrier: number;
    longest_time_as_skull_carrier: TimePlayed;
    skull_carriers_killed: number;
    skull_grabs: number;
    skull_scoring_ticks: number;
    time_as_skull_carrier: TimePlayed;
}

export interface Stockpile {
    kills_as_power_seed_carrier: number;
    power_seed_carriers_killed: number;
    power_seeds_deposited: number;
    power_seeds_stolen: number;
    time_as_power_seed_carrier: TimePlayed;
    time_as_power_seed_driver: TimePlayed;
}

export interface Zones {
    total_zone_occupation_time: TimePlayed;
    zone_captures: number;
    zone_defensive_kills: number;
    zone_offensive_kills: number;
    zone_scoring_ticks: number;
    zone_secures: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMatches(json: string): Matches {
        return JSON.parse(json);
    }

    public static matchesToJson(value: Matches): string {
        return JSON.stringify(value);
    }
}

