export const pfiWinterWarmer2026 = {
  meetingMeta: {
    slug: "2026-tvkc-winterwarmer-pfi",
    eventName: "TVKC Winter Warmer Trophy",
    track: "PFI (Fulbeck)",
    date: "2026-03-01",
    class: "Rotax Mini Max",
    round: 1,
    documentId: "TVKC-2026-R1",
    conditions: "Cold, Dry",
    kartNo: 146,
    driverName: "James Devereux",
    entrant: "MLC Motorsport",
  },

  sessions: [
    {
      session: "Qualifying",
      kartNo: 146,
      lapsCompleted: 6,
      lapTimesCompleted: 4,
      bestLap: "1:02.44",
      gridPosition: 18,
      penalties: [
        {
          type: "Nosecone delete",
          penaltySeconds: 0,
          reason:
            "Bodywork found non-compliant post-qualifying. Grid position unaffected but noted.",
          stewardsRef: "Q-01",
        },
      ],
      notes: "Shunt on opening lap causing low average lap time.",
    },
    {
      session: "Heat 1",
      startPosition: 18,
      finishPosition: 14,
      gained: "+4",
      laps: 10,
      bestLap: "1:03.12",
      penalties: [
        {
          type: "DSQ",
          penaltySeconds: null,
          reason:
            "Excluded post-race — rear bodywork non-compliant after contact lap 4. Race pace competitive; excluded on technical grounds.",
          stewardsRef: "H1-03",
        },
      ],
      classified: false,
      notes: "Extraordinary racecraft climb to P12 but DSQ for underweight.",
    },
    {
      session: "Heat 2",
      startPosition: 22,
      finishPosition: 7,
      gained: "+15",
      laps: 10,
      bestLap: "1:02.89",
      penalties: [],
      classified: true,
      notes:
        "Statement drive. Consistent 1:02s in final 5 laps. Passed 15 karts — mix of late-brakers and clean overtakes through the chicane. Best race of the season so far.",
    },
    {
      session: "Final",
      startPosition: 14,
      finishPosition: 17,
      gained: "-3",
      laps: 18,
      bestLap: "1:03.61",
      bestLapNumber: 10,
      totalTime: "11:56.47",
      penalties: [],
      classified: true,
      notes:
        "Dropped early due to traffic in the opening sequence. Recovered but tyre drop in laps 14–16 cost positions. P17 doesn't reflect outright pace.",
    },
  ],

  derivedMetrics: {
    finalBestLap: "1:03.61",
    finalBestLapNumber: 10,
    finalMedianLap: "1:03.90",
    finalLapStdDev: "0.38",
    anomalyLaps: [14, 15, 16],
    anomalyReason: "Tyre degradation / traffic — sector 1 up by ~0.6s vs median",
    bestPositionsGained: 15,
    bestPositionsGainedSession: "Heat 2",
    penaltiesApplied: ["Nosecone delete (Q)", "DSQ (H1)"],
    weekendHeadline:
      "+15 in Heat 1 & 2 announced the pace. DSQ (underweight) — but the data says the fight is real.",
  },

  scoutNotes: [
    "Sector 2 consistency in Heat 2 is genuinely competitive — within 0.15s of the race winner.",
    "Racecraft under pressure is strong — all 15 Heat 2 overtakes were clean, no contact.",
  ],
};
