export interface PokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    hp: string;
    types: string[];
    evolvesFrom?: string;
    attacks: Array<{
      name: string;
      cost: string[];
      convertedEnergyCost: number;
      damage: string;
      text: string;
    }>;
    weaknesses: Array<{
      type: string;
      value: string;
    }>;
    retreatCost: string[];
    convertedRetreatCost: number;
    set: {
      id: string;
      name: string;
      series: string;
      printedTotal: number;
      total: number;
      legalities: {
        unlimited: string;
      };
      ptcgoCode: string;
      releaseDate: string;
      updatedAt: string;
      images: {
        symbol: string;
        logo: string;
      };
    };
    number: string;
    artist: string;
    rarity: string;
    nationalPokedexNumbers: number[];
    legalities: {
      unlimited: string;
    };
    images: {
      small: string;
      large: string;
    };
    tcgplayer: {
      url: string;
      updatedAt: string;
      prices: {
        holofoil?: {
          low: number;
          mid: number;
          high: number;
          market: number;
          directLow: number;
        };
        reverseHolofoil?: {
          low: number;
          mid: number;
          high: number;
          market: number;
          directLow: number;
        };
      };
    };
  }