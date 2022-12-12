export const caseData = (e) => {
  return {
    case: {
      brand: e.target.case_brand.value,
      model: e.target.case_model.value,
      size: e.target.case_size.value,
      material: e.target.case_material.value,
    },
  }
}

export const coolerData = (e) => {
  return {
    cooler: {
      brand: e.target.cooler_brand.value,
      model: e.target.cooler_model.value,
      size: e.target.cooler_size.value,
      sockets: e.target.cooler_sockets.value,
    },
  };
};

export const powerData = (e) => {
  return {
    power: {
      brand: e.target.power_brand.value,
      model: e.target.power_model.value,
      wattage: e.target.power_wattage.value,
      certification: e.target.power_certification.value,
      size: e.target.power_size.value,
      modular: e.target.power_modular.value
    },
  };
};

export const ramData = (e) => {
  return {
    ram: {
      brand: e.target.ram_brand.value,
      model: e.target.ram_model.value,
      capacity: e.target.ram_capacity.value,
      gen: e.target.ram_gen.value,
      mhz: e.target.ram_mhz.value,
      form: e.target.ram_form.value,
    },
  };
};

export const graphicData = (e) => {
  return {
    graphic: {
      brand: e.target.graphic_brand.value,
      model: e.target.graphic_model.value,
      ram: e.target.graphic_ram.value,
      gen: e.target.graphic_gen.value,
    },
  };
};

export const moboData = (e) => {
  return {
    mobo: {
      brand: e.target.mobo_brand.value,
      model: e.target.mobo_model.value,
      socket: e.target.mobo_socket.value,
      mhz: e.target.mobo_mhz.value,
      ram_slots: e.target.mobo_ram_slots.value,
      sata_slots: e.target.mobo_sata_slots.value,
      m2_slots: e.target.mobo_m2_slots.value,
    },
  };
};

export const processorData = (e) => {
  return {
    processor: {
      brand: e.target.processor_brand.value,
      model: e.target.processor_model.value,
      cores: e.target.processor_cores.value,
      threads: e.target.processor_threads.value,
      base_ghz: e.target.processor_base_ghz.value,
      turbo_ghz: e.target.processor_turbo_ghz.value,
      mhz: e.target.processor_mhz.value,
      fan: e.target.processor_fan.value,
    },
  }
}

export const storageData = (e) => {
  return {
    storage: {
      brand: e.target.storage_brand.value,
      model: e.target.storage_model.value,
      interface: e.target.storage_interface.value,
      capacity: e.target.storage_capacity.value,
      speed: e.target.storage_speed.value,
    },
  }
}
