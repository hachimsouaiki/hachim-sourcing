export const insights = [
  {
    slug: 'multi-sku-rfq', category: 'Supplier selection', image: 'drawing',
    title: 'How to Write a Multi-SKU RFQ for China Suppliers',
    summary: 'Structure a request for quotation so suppliers can price the same items, quantities, packaging and commercial terms.',
    takeaways: [
      'Give each SKU its own quote line and drawing revision.',
      'Ask every supplier to price the same quantities and delivery basis.',
      'Record missing prices and proposed deviations before comparing totals.',
    ],
    sections: [
      ['Build a SKU schedule', 'Start with one row per part and use a stable item code. Give each row a drawing revision, material, finish, order quantity and any critical acceptance requirements. Name attachments with the SKU and revision so purchasing and engineering can trace each quote to the file the supplier reviewed. If you request prices for 250 and 1,000 units, show both quantity breaks for each item.'],
      ['Separate shared terms from part-specific requirements', 'Put the quote deadline, currency, named delivery location and document requirements in the main brief. Keep details that vary by part on the relevant row. For example, both parts might need corrosion protection for shipment, while only the bearing housing needs a dimensional report for its bore. If a requirement is mandatory, say so on the schedule.'],
      ['Make supplier responses comparable', 'Provide empty response columns for price at each quantity, minimum order quantity, tooling, sample cost, lead time and deviations. Ask when the lead time starts and whether the stated minimum applies per SKU or to a combined order. Request a separate line for common tooling or packaging, with the affected items identified. That gives you a basis for comparing a trial order and a repeat order separately.'],
      ['Mark alternatives and incomplete lines', 'Ask suppliers to quote the requested specification first wherever they can. If a supplier proposes a different alloy, finish or process, have them identify the affected SKU and explain the cost, timing and technical implications. Use explicit statuses such as Quoted, Clarification needed and Outside capability. A blank price can mean the supplier missed the item altogether.'],
      ['Check the quote before handing it off', 'Match each supplier response to the current drawing and confirm that the quantity, currency and delivery terms line up. Resolve any assumption that could change the shortlist. For example, ask whether a setup fee is charged once per drawing revision or on every batch. Record what is confirmed, who owns each open question and what to verify through samples or inspection.'],
    ],
    example: {
      headers: ['SKU and revision', 'Requirement', 'Quote quantities', 'Confirm in reply'],
      rows: [
        ['BH-101 · Rev C', '6061-T6 bearing housing with clear anodizing', '250 / 1,000', 'Bore tolerance after anodizing and any masking charge'],
        ['MP-204 · Rev A', 'Powder-coated steel mounting plate', '250 / 1,000', 'Setup cost and packaging to protect coated surfaces'],
      ],
    },
    questions: [
      ['What if a supplier can make only some SKUs?', 'Ask for a partial quote with each remaining line marked Outside capability. Compare the quoted items first, then account for any extra freight, packaging or coordination cost if you split the order.'],
      ['Should I give suppliers an annual forecast?', 'Yes, if it helps them plan capacity or offer volume pricing. Show it separately from the firm order quantity so your first order is priced on a clear basis.'],
    ],
  },
  {
    slug: 'supplier-sample-approval', category: 'Quality planning', image: 'cnc',
    title: 'What a China Supplier Sample Can and Cannot Prove',
    summary: 'Use samples to evaluate product requirements and set separate checks for production readiness.',
    sections: [
      ['Decide what the sample needs to demonstrate', 'Specify the measurements, fit, finish and functional checks you will use. Record the drawing revision and ask how the sample was made. A manually finished first sample may confirm fit while leaving the planned production process untested.'],
      ['Document the condition of approval', 'Link your feedback to a sample ID, photos and measured results. Record which points passed, which need revisions and which require more evidence. If a change affects the drawing, update the revision before requesting another sample or releasing an order.'],
      ['Plan checks for the production lot', 'Confirm that production will use the agreed materials, tooling and process. Decide which records you need from the first production run and which characteristics you want inspected before shipment. Keep a traceable approved reference sample where it helps assess appearance or assembly.'],
      ["Check whether the sample represents production", "Ask whether the sample used the production tooling, approved material and intended finishing process. For a machined housing, a hand-polished bore may fit correctly during assembly while leaving the repeatability of the machining process untested. Record differences and require evidence from production before closing those points."],
    ],
    takeaways: [
      "Record the sample ID and the process used to make it.",
      "Set separate acceptance checks for the production lot."
    ],
    example: {
      "title": "Worked example",
      "headers": [
        "Evidence",
        "What it supports",
        "Next check"
      ],
      "rows": [
        [
          "Prototype assembled on fixture",
          "Fit of the tested unit",
          "First-off dimensions from production tooling"
        ],
        [
          "Material certificate for sample",
          "Material traceability for the sample batch",
          "Certificate tied to the production lot"
        ]
      ]
    },
    questions: [
      [
        "Can I approve just the appearance?",
        "Yes. Record appearance approval and list the fit, material or performance checks still open."
      ],
      [
        "Should I keep the approved sample?",
        "Keep a labeled reference when it will help compare finish, color or assembly, and retain the signed revision and results."
      ]
    ],
  },
  {
    slug: 'pre-shipment-inspection-defects', category: 'Quality planning', image: 'parts',
    title: 'What to Do When a Pre-Shipment Inspection Finds Defects',
    summary: 'Review the evidence, agree corrective action and decide whether to rework, re-inspect or hold shipment.',
    sections: [
      ['Confirm the scope of the finding', 'Read the report against the agreed specification and inspection plan. Check the quantity inspected, affected lot identifiers, measurements and photographs. If there is a dispute, ask the inspector to clarify the measurement method and the acceptance criterion used.'],
      ['Ask for a corrective action with evidence', 'Have the supplier identify the affected stock, contain it and propose sorting, rework or replacement. Agree who will carry out the work, when it will finish and how results will be documented. Ask whether the same issue could affect other lots or related parts.'],
      ['Record the shipment decision', 'Hold release while significant findings remain open. Agree whether a targeted follow-up or a repeat inspection is needed, and specify which units and characteristics to check. Document any approved deviation with the affected quantities and the person authorizing it.'],
      ["Match follow-up to the failure", "If a batch of brackets has out-of-tolerance hole spacing, ask the supplier to identify affected lot numbers, contain the parts and explain how sorting or rework will be verified. Agree the sampling scope with the inspection provider before the follow-up. Check whether rework could introduce new problems such as coating damage."],
    ],
    takeaways: [
      "Tie each finding to the agreed acceptance criteria.",
      "Record what must be verified before releasing the lot."
    ],
    example: {
      "title": "Worked example",
      "headers": [
        "Finding",
        "Evidence to request",
        "Decision point"
      ],
      "rows": [
        [
          "Hole spacing outside drawing tolerance",
          "Measurements and affected lot IDs",
          "Hold pending verified correction"
        ],
        [
          "Missing carton labels",
          "Photos of corrected labels and lot count",
          "Confirm traceability before release"
        ]
      ]
    },
    questions: [
      [
        "Can supplier photos close a finding?",
        "Photos can document visible changes such as labels. Dimensional or functional findings typically need measurements or test evidence tied to the lot."
      ],
      [
        "Who approves a deviation?",
        "The buyer’s authorized decision-maker should approve it in writing and identify the exact lot and quantity covered."
      ]
    ],
  },
  {
    slug: 'manufacturer-vs-trading-company', category: 'Supplier selection', image: 'factory',
    title: 'China Manufacturer vs Trading Company: How to Choose for Your Order',
    summary: 'Decide which supplier model fits the product complexity, order mix and communication your project needs.',
    sections: [
      ['Start with the work your order needs', 'A drawing-led project with tight tolerances may benefit from direct access to the engineering and production teams. An order with several unrelated products may benefit from a trading company that coordinates multiple factories and consolidates packaging and shipment details.'],
      ['Find out who controls each operation', 'Ask where production happens, who owns the tooling and which processes are subcontracted. Clarify who issues the quotation, signs the purchase agreement and handles quality claims. Even a direct manufacturer can rely on outside partners for finishing or secondary operations.'],
      ['Compare both options on the same brief', 'Use the same revisions, quantities and delivery basis. Look at who will answer technical questions, how changes reach the production floor and whether evidence is available for critical operations. Include service fees, coordination effort and the cost of resolving problems alongside item price.'],
      ["Check access before committing", "Ask each candidate to explain how drawings reach the production team, who signs off changes and who will investigate defects. For a trading company, confirm whether you can speak directly with the factory when a technical question needs it. For a manufacturer, check who manages subcontracted finishing, packaging or testing."],
    ],
    takeaways: [
      "Trace who makes the product and who manages changes.",
      "Compare each option on the same brief and order mix."
    ],
    example: {
      "title": "Worked example",
      "headers": [
        "Order",
        "Capability to verify",
        "Evidence to request"
      ],
      "rows": [
        [
          "Tight-tolerance CNC enclosure",
          "Engineering access and dimensional control",
          "Manufacturing route and sample report"
        ],
        [
          "Mixed hardware order",
          "Coordination across several factories",
          "Supplier list and consolidation plan"
        ]
      ]
    },
    questions: [
      [
        "Does a factory always quote less?",
        "Compare total costs on the same quantity and delivery basis, including tooling, packaging and coordination."
      ],
      [
        "Who handles a quality claim?",
        "Confirm the contracting entity, the claim process and who coordinates corrective action before ordering."
      ]
    ],
  },
  {
    slug: 'first-order-checklist', category: 'Order readiness', image: 'tools',
    title: 'What to Confirm Before a First Order with a China Supplier',
    summary: 'Check the specification, sample approval, commercial terms, packaging and verification plan before issuing a first order.',
    sections: [
      ['Lock the product and packaging requirements', 'Reference the agreed drawing, specification and sample ID in the order. Confirm material, finish, critical dimensions and any testing requirements. Define packaging, labels and quantities per carton or pallet, especially where handling or corrosion protection matters.'],
      ['Confirm what the price and timeline cover', 'Record order quantity, unit price, tooling ownership, delivery terms and the event that starts the lead time. Check which documents and milestones trigger payment. Confirm the legal entity receiving the order and verify payment details through a contact channel you already trust.'],
      ['Assign the next verification step', 'Decide when to review a first-off part, production evidence or inspection report. Name who approves changes and shipment release. Ask the supplier to acknowledge the order requirements in writing and flag any deviations before production begins.'],
      ["Translate the quote into an order acknowledgement", "Send a purchase order that references the agreed quote and revision-controlled attachments. Ask the supplier to return written acknowledgement of quantities, milestones and any exceptions. Keep the approved copy with sample feedback and inspection plans so the team can see which version applies when questions arise."],
    ],
    takeaways: [
      "Attach the exact documents the supplier must build to.",
      "Agree who approves changes and releases the shipment."
    ],
    example: {
      "title": "Worked example",
      "headers": [
        "Confirm",
        "Record on the order",
        "Evidence"
      ],
      "rows": [
        [
          "Drawing basis",
          "BH-101 revision C",
          "Supplier acknowledgement"
        ],
        [
          "Shipment release",
          "Buyer approval after inspection review",
          "Inspection report and written release"
        ]
      ]
    },
    questions: [
      [
        "What if the supplier needs a change after ordering?",
        "Record the proposed change and its effects on cost, timing and acceptance. Update the agreed documents before authorizing it."
      ],
      [
        "When should the inspection be booked?",
        "Agree the booking window with the supplier and inspector when confirming production milestones."
      ]
    ],
  },
  {
    slug: 'compare-supplier-quotes', category: 'Cost comparison', image: 'gears',
    title: 'How to Compare Three China Supplier Quotes',
    summary: 'Put three quotations on the same product, quantity, delivery and commercial basis.',
    sections: [
      ['Make a common comparison table', 'Use one column per supplier and rows for revision, quantity, unit price, tooling, sample fees and lead time. Record the delivery basis and named location next to each price. Keep the original quotation reference and date so you can trace every figure back to a source.'],
      ['Calculate one comparable scenario', 'Choose a quantity and destination your team can actually order. Add the applicable one-time and recurring costs under the same delivery assumptions. Keep missing prices marked as open and show estimates separately from supplier-confirmed amounts.'],
      ['Resolve differences that could change the decision', 'Ask whether a lower price assumes a different material, tolerance, finish or packaging standard. Confirm the biggest cost gaps and dependencies first. Then record the quote you prefer, the assumptions behind the choice and what evidence you need before placing an order.'],
      ["Use separate views for first and repeat orders", "Calculate a first-order scenario that includes any confirmed one-time setup and a repeat-order scenario using applicable recurring charges. For example, at 500 units, €5.20 per part plus €150 setup totals €2,750 before any separate delivery charges. A €5.60 unit price with no setup totals €2,800 on the same basis. At another quantity or on repeat runs the ranking can change."],
    ],
    takeaways: [
      "Normalize quantities, delivery terms and what each quote includes.",
      "Keep open costs visible alongside confirmed figures."
    ],
    example: {
      "title": "Worked example",
      "headers": [
        "Quote at 500 units",
        "Unit price",
        "One-time setup",
        "First-order subtotal"
      ],
      "rows": [
        [
          "Supplier A",
          "€5.20",
          "€150",
          "€2,750"
        ],
        [
          "Supplier B",
          "€5.60",
          "€0",
          "€2,800"
        ],
        [
          "Supplier C",
          "€4.95",
          "Awaiting confirmation",
          "Incomplete"
        ]
      ]
    },
    questions: [
      [
        "How do I compare quotes in different currencies?",
        "Use one exchange-rate date and record the assumption beside the comparison. Keep the original currency on each quote."
      ],
      [
        "What if tooling ownership is unclear?",
        "Confirm ownership, maintenance, storage and transfer terms before treating the charge as comparable."
      ]
    ],
  },
  {
    slug: 'supplier-fit', category: 'Supplier selection', image: 'cnc',
    title: 'How to Tell Whether a China Supplier Fits Your Order',
    summary: 'Assess suppliers against the manufacturing process, quality controls, order volume and communication your project requires.',
    sections: [
      ['Define the requirements that decide the shortlist', 'List the manufacturing process, materials, tolerances and documentation that matter to the order. Note which requirements are mandatory and where alternatives are acceptable. Add order size, repeat volumes and any delivery constraint that could rule out a supplier.'],
      ['Look for evidence of fit', 'Ask for examples of comparable work, the planned manufacturing route and how critical characteristics will be checked. Discuss batch size, capacity and subcontracted steps. A supplier that identifies a difficult feature and explains its proposed process gives you something concrete to verify.'],
      ['Track open questions before advancing', 'Record what each supplier has confirmed, what depends on a sample or visit and what still needs an answer. Give each open point an owner and a next action. Advance suppliers whose confirmed capabilities match the brief and whose remaining gaps can be checked within your timeline.'],
      ["Use a short evidence matrix", "Assign each mandatory requirement a status such as Confirmed, Pending evidence or Gap. For a CNC supplier, a list of machines is a starting point. Ask for a relevant process plan and example measurements for the critical feature, then confirm how inspection results would be recorded for your production order."],
    ],
    takeaways: [
      "Define pass criteria before reviewing suppliers.",
      "Link each important claim to evidence or a follow-up."
    ],
    example: {
      "title": "Worked example",
      "headers": [
        "Criterion",
        "Evidence to request",
        "Next step"
      ],
      "rows": [
        [
          "Critical bore tolerance",
          "Example measurement report for a comparable feature",
          "Verify against first-off parts"
        ],
        [
          "Repeat order capacity",
          "Available machine hours and batch schedule",
          "Confirm lead time at expected volume"
        ]
      ]
    },
    questions: [
      [
        "Should the lowest-price supplier make the shortlist?",
        "Apply the mandatory technical and delivery criteria first. Compare price among suppliers with a credible path to meeting them."
      ],
      [
        "What if evidence is confidential?",
        "Ask for an anonymized report, a demonstration or a sample-based check that still verifies the requirement."
      ]
    ],
  },
];
