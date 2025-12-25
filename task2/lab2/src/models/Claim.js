const mongoose = require('mongoose')

const ClaimSchema = new mongoose.Schema(
    {
        claim_id: { type: Number, required: true, unique: true },
        policy_id: { type: Number, required: true }, // FK -> policies.policy_id
        reported_by_client_id: { type: Number, required: true }, // FK -> clients.client_id
        handler_user_id: { type: Number, required: true }, // FK -> users.user_id (Manager)
        event_time: { type: Date, required: true },
        location_lat: { type: Number },
        location_lng: { type: Number },
        description: { type: String, required: true },
        status: { type: String, enum: ['Created', 'InReview', 'Approved', 'Rejected', 'Paid'], required: true },
        estimated_damage: { type: Number },
        approved_payout: { type: Number },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    },
    { collection: 'claims' }
)

module.exports = mongoose.model('Claim', ClaimSchema)