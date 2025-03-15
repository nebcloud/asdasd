Platform.mods.kubejs.name = 'Catalyst Studios';

StartupEvents.registry('item', catalyst => {
    catalyst.create('storage_catalyst').displayName('Storage Catalyst').texture('catalyst:item/storage_catalyst')
    catalyst.create('innovation_catalyst').displayName('Innovation Catalyst').texture('catalyst:item/innovation_catalyst')
    catalyst.create('adventure_catalyst').displayName('Adventure Catalyst').texture('catalyst:item/adventure_catalyst')
    catalyst.create('boss_catalyst').displayName('Boss Catalyst').texture('catalyst:item/boss_catalyst')
    catalyst.create('growth_catalyst').displayName('Growth Catalyst').texture('catalyst:item/growth_catalyst')
    catalyst.create('power_catalyst').displayName('Power Catalyst').texture('catalyst:item/power_catalyst')
    catalyst.create('magic_catalyst').displayName('Magic Catalyst').texture('catalyst:item/magic_catalyst')
//    catalyst.create('tiny_charcoal').burnTime(200)
//    catalyst.create('tiny_coal').burnTime(200)
    catalyst.create('spirit_agglomeratio').displayName('Entangled Spirit Agglomeratio').texture('catalyst:item/spirit_agglomeratio')
})